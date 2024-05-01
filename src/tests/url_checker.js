import { check_url_validaty } from 'src/client/js/check_url.js'

CheckUrl('check_url_validaty', () =>{
expect(check_url_validaty('https://fonts.google.com/')).toBe(true);
expect(check_url_validaty('htt:fonts.google.m/')).toBe(false);
})