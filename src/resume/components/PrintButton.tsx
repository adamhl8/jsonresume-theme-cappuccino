import { IconDownload } from "@tabler/icons-react"

function PrintButton({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/** biome-ignore lint/nursery/useUniqueElementIds: needed for script */}
      <button
        type="button"
        id="print-button"
        className="flex cursor-pointer items-center space-x-2 rounded-lg border border-secondary bg-white px-4 py-2 font-medium hover:bg-gray-100"
      >
        <IconDownload size={18} />
        <span>Print / Save as PDF</span>
      </button>

      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: need to set up onclick
        dangerouslySetInnerHTML={{
          __html: `document.getElementById('print-button').onclick = () => window.print()`,
        }}
      />
    </div>
  )
}

export default PrintButton
