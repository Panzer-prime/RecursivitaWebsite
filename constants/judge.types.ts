export type Judge0Submission = {
    source_code: string;
    language_id: number;
    stdin: string;
    expected_output: null | string;
    stdout: string;
    status_id: number;
    created_at: string;
    finished_at: string;
    time: string;
    memory: number;
    stderr: null | string;
    token: string;
    number_of_runs: number;
    cpu_time_limit: string;
    cpu_extra_time: string;
    wall_time_limit: string;
    memory_limit: number;
    stack_limit: number;
    max_processes_and_or_threads: number;
    enable_per_process_and_thread_time_limit: boolean;
    enable_per_process_and_thread_memory_limit: boolean;
    max_file_size: number;
    compile_output: null | string;
    exit_code: number;
    exit_signal: null | string;
    message: null | string;
    wall_time: string;
    compiler_options: null | string;
    command_line_arguments: null | string;
    redirect_stderr_to_stdout: boolean;
    callback_url: null | string;
    additional_files: null | string;
    enable_network: boolean;
    status: {
      id: number;
      description: string;
    };
    language: {
      id: number;
      name: string;
    };
  };
  