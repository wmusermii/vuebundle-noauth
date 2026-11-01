-- =====================================================================
--  vuebundle-noauth — gateway passthrough schema (Postgres)
--  Jalankan: psql -d NAMA_DB -v ON_ERROR_STOP=1 -f noauth_install.sql
-- =====================================================================
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE SCHEMA IF NOT EXISTS gateway;

CREATE TABLE gateway.services (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_key  varchar(50)  NOT NULL UNIQUE,   -- dipakai di header x-service-key
  name         varchar(150) NOT NULL,
  base_url     varchar(300) NOT NULL,          -- contoh: http://localhost:9200
  default_path varchar(200) NOT NULL DEFAULT '/healthz',
  timeout_ms   integer      NOT NULL DEFAULT 5000,
  is_active    boolean      NOT NULL DEFAULT true,
  created_at   timestamptz  NOT NULL DEFAULT now(),
  updated_at   timestamptz  NOT NULL DEFAULT now()
);

CREATE TABLE gateway.service_logs (
  id            bigserial    PRIMARY KEY,
  service_key   varchar(50)  NOT NULL,
  method        varchar(10)  NOT NULL,
  target_path   varchar(300) NOT NULL,
  status_code   integer,
  latency_ms    integer,
  request_ip    varchar(64),
  error_message text,
  created_at    timestamptz  NOT NULL DEFAULT now()
);

CREATE INDEX idx_service_logs_service_key ON gateway.service_logs (service_key, created_at DESC);

CREATE FUNCTION gateway.fn_set_updated_at() RETURNS trigger
  LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END $$;

CREATE TRIGGER trg_services_updated_at
  BEFORE UPDATE ON gateway.services
  FOR EACH ROW EXECUTE FUNCTION gateway.fn_set_updated_at();

-- seed: service dummy pertama sesuai task (localhost:9200/healthz)
INSERT INTO gateway.services (service_key, name, base_url, default_path)
VALUES ('core', 'Core API (dummy)', 'http://localhost:9200', '/healthz');
