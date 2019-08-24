import React from 'react'
import css from './footer.css'

class Footer extends React.Component {
    render () {
      return <div className={css.footer}>
          <div>
            <img className={css.logo} src={"../static/RuppsLogo-NoBackground-Gray.png"}/>
          </div>
        <div className={css.contacts}>

          <div>
          <img className={css.pin}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACJ0lEQVRIS81Wu3EbQQwFhhccI0sVmKpAYsIZbCKrA7kCSRVYrsB2BWYHtiqQXIGtZDHD5KgKxBLkjAE58MBzN3NcYj+6hNrkgsXiYR/w3h7CgRYeCBdeDczME0Q8FZEzLRoRlyLyRESr11yiGJiZrwHgCwBMLAARWSLinIjuSgrIAusNReQeEf/fMLfaAj7mGEgCLxaLs81m8xsRj3KA/X0Reamq6mI2my1j56LATdMcrdfrJkZtQSGruq6n0+n0xYqNAjPzTwC4igA8AsCfdu8DAJxH4u6ISGdjb5nA2lcAeDbin0aj0XVIYduSB0R8b5w5sfodA/7aTnA/z9+6ricx6tpitafvgn5/ds7Nw4JiwEpjSN8NESn90eW9v0XE70HAIxFpO3ZWDFgHYqdyADAp62ezWqQT7pw7LgWWMJCIsprXM8xcdNZM5r1fGYMy6MYAoHa6Zz5vq8fe+zkifgrdaDwen6SmWkQaw+W+EZGqJD9cqsvtdquutbPUh6uqugl1zMw6tT8iLleu43ZIVJOnEe2o3PrOtSeX9pwpJd2LTqr3/hIR71O6Ldi7IKKuwDzVXQQzW0ZSgAcgIr+cc5ex4KQ2YzZYgJy01yTVXfKBlEcp7vKWupH1aJgXFxHzUSiSk5Ux8z53R6Lv72DgVmKpn4Ni0KIeh5Uy8x7tpfT2cxX12ADX35nucb/NvdNW6wYBayK1Vf2m/iRTshsMXKDlZMjBgP8Bd3bwH32bmRUAAAAASUVORK5CYII="/>
          Tremonton | UT
          </div>
          <div>
          <img className={css.phone}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABmElEQVRIS+2WwXHCMBBF/97kU+ggdBBzhAukg3SAOyCpIOkg6SCkg6QDTt4ZX0wqICWEE3AAZXbGzHhkyZI8znBBR3v9n/Zr/W3ChRZdiIsruJPzzDwEMNVap0SUViIzAEul1NNoNPo1hTtbXZbl4HA4zE+nU1aDNTautV4nSXJvwqPBAtzv9wut9SMRDQIt+hiPx1m9NgrMzGLfOwCxNnR9K6VmnTtmZtmxQGOWFSoCQR3neS62vsYQATihQeCWTrcAPgHIFN8Zm2qFesFFUaTH47E0O9VafyVJksm5VcO2qsG9UC84z/MfIro1wI0JrcFhGyTbETnPmJlfADzXH5JOJ5PJg01I4HLdFhbBYBHZ7XYb4z3dKqWGocK+QbR27JjihsU+8bb7VjAzr81JdUVfV3gDXAX+xibYJ7wB9oVFX3Ab+I2IFi0WBr2nviOwWS1hMHU82AvUGiDM7AL3BnWB5W/hJjZ7fdaa921WLwHMa4W9dnrWbYCN0P8XqPMjUUXm8vwFirUxpD7oRyBEKLbmCo51rHP9H1Hgwx/ZxDrHAAAAAElFTkSuQmCC"/>
          (123)-456-7890
          </div>
          <div>
          <img className={css.mail}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABK0lEQVRIS+2WQbKCMAyGkyn38N1A3TCTnUfhnUQ8id7EZWbYqDfw3YNO3pQBRK01WBQXsANCvvx/2lCEkS4ciQsT+GPOX1nNzBkArAHgZ+AKzgCwIaJdk7cFM/MKAPYDA6/SGWOWaZoe3cMuOK/VvpPtVDuOH+wqs9Y6W+aRVZyMMZm19lDnCYOJqHKCmWNcaCHMLL3ALrgoikVP9ZXKppe1AB1YRI5JkvzefKxR36psii7LcouIC5XiTl9zIto09wH1PpW+QsM97i4ohfpnKrvp9OCQeveuZzteAoNP/YNePtqFr4F96ntuuWhwpb6aQJcVq5k18WANxRMzgaPnstb577J6nINA/RfJRCRHxJnWO02ciPwhopv790cfTYIhY6Zz9ZBuBnONZvU/iWDZH7HnugYAAAAASUVORK5CYII="/>
          email@gmail.com
          </div>
          <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABPElEQVRIS+2XzU3DQBCF38gXH9MBpAP7YmlOJBWkBOgAOiAd0AIl0AHk4pF8Siog6SAUYA0a5LXWUQyKsptf9rQXz6f35mfHhCMdOhIXpwMWkVtVvQnpBBGtmHnpx+woNiiAz5BQL9bQh2+CRwDeI4HHzPzhYp89+EtVp0Q0d4pUNSOiF8+94IoXaZqO8jxf+ykSkc20BQd3Ajp4dDAzt3VSVVVW1/UjAGvJARFlsayeMbNZ+nPKsnwjoklPVwS1ugMWEWuXu4sDLwA8maokSdZFUbQt1OR40Ch+AHAfMscde/umnIhMATwfHLyl0PYuLntlXhsl9uq4O0TE7HUvm93t0XFnb7Dv7nVU9b/idmRe7OSKkuNdl71d2ql/2TMpzabpN37v7vfHrPa/W/663kbaLreGPZ0/iUOp/gbQTfMfyZUFMgAAAABJRU5ErkJggg=="/>
          Follow Us
          </div>
        </div>

        
        <div className={css.copyright}>
          <div >
          &#169; ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    }
  }

  export default Footer