export default function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="https://github.com/dsreddy2403" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300">
                        <span className="sr-only">GitHub</span>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/santhosh-dubbaka-0ba6bb3ab/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300">
                        <span className="sr-only">LinkedIn</span>
                        LinkedIn
                    </a>
                    <a href="mailto:dsreddy2403@gmail.com" className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300">
                        <span className="sr-only">Email</span>
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
