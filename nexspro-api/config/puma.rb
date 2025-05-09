# Threads per worker
threads_count = ENV.fetch("RAILS_MAX_THREADS", 3)
threads threads_count, threads_count

# Port
port ENV.fetch("PORT", 3000)

# Environment
environment ENV.fetch("RAILS_ENV", "development")

# Restart command
plugin :tmp_restart

# Solid Queue
plugin :solid_queue if ENV["SOLID_QUEUE_IN_PUMA"]

# PID file
pidfile ENV["PIDFILE"] if ENV["PIDFILE"]
