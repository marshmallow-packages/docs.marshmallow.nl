export function Logomark(props) {
  return ''
}

export function Logo(props) {
  return (
    <div {...props}>
      <div class="flex items-center">
        <img src="https://marshmallow.nl/images/logo-black.png" class="h-6 mt-2 dark:hidden" />
        <img src="https://marshmallow.nl/images/mm-logo-white.svg" class="h-10 hidden dark:block" />
      </div>
    </div>
  )
}
