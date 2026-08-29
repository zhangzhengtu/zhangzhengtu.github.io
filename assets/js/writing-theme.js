(function() {
  const themeToggle = document.getElementById('themeToggle');

  if (themeToggle) {
    const icon = themeToggle.querySelector('i');

    function setTheme(isDark) {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

      if (icon) {
        icon.classList.toggle('fa-sun', isDark);
        icon.classList.toggle('fa-moon', !isDark);
      }

      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

    themeToggle.addEventListener('click', function() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(!isDark);
    });
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderInline(text) {
    return escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  function renderMarkdown(markdown) {
    const blocks = markdown.trim().split(/\n\s*\n/);

    return blocks.map(function(block) {
      const trimmed = block.trim();

      if (!trimmed) {
        return '';
      }

      if (/^###\s+/.test(trimmed)) {
        return '<h3>' + renderInline(trimmed.replace(/^###\s+/, '')) + '</h3>';
      }

      if (/^##\s+/.test(trimmed)) {
        return '<h2>' + renderInline(trimmed.replace(/^##\s+/, '')) + '</h2>';
      }

      if (/^>\s?/.test(trimmed)) {
        const quote = trimmed.split('\n').map(function(line) {
          return line.replace(/^>\s?/, '');
        }).join('<br>');
        return '<blockquote>' + renderInline(quote) + '</blockquote>';
      }

      if (/^[-*]\s+/m.test(trimmed)) {
        const items = trimmed.split('\n').map(function(line) {
          return '<li>' + renderInline(line.replace(/^[-*]\s+/, '')) + '</li>';
        }).join('');
        return '<ul>' + items + '</ul>';
      }

      return '<p>' + renderInline(trimmed).replace(/\n/g, '<br>') + '</p>';
    }).join('\n');
  }

  const markdownSource = document.getElementById('articleMarkdown');
  const articleBody = document.querySelector('[data-markdown-target]');

  if (markdownSource && articleBody) {
    articleBody.innerHTML = renderMarkdown(markdownSource.textContent);
  }
})();
