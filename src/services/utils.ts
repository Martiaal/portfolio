
export const handleDownload = (file: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop() || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
