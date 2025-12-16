export default function ContactForm() {
    return (
        <form id="contactForm" action="https://formspree.io/f/mayzqdjq" method="post"> 
                    
                        <label for="firstName">First Name:
                        </label>
                        <input type="text" id="firstName" name="firstName" placeholder="John" required/>
                        <label for="lastName">Last Name:
                        </label>
                        <input type="text" id="lastName" name="lastName" placeholder="Doe" required/>
                        <label for="email">Email:
                        </label>
                        <input type="email" id="email" name="email" placeholder="johnDoe@email.com" required />
                        <label for="phoneNumber">Number:
                        </label>
                        <input type="number" id="phoneNumber" name="phoneNumber" value="" />
                    
                    <fieldset id="preferredContact">
                        <legend>What's your preffered contact method?</legend>
                        <label for="phone">
                            <input type="radio" name="prefferedContactMethod" value="phone" />
                            Phone
                        </label>
                        <label for="email">
                            <input type="radio" name="prefferedContactMethod" value="email" />
                            Email
                        </label>
                    </fieldset>
                    <fieldset id="desiredService">
                            <legend>What type of help are you needing?</legend>
                            <label for="component">
                                <input type="checkbox" name="desiredService" id="component" value="component" required />
                                A new component or banner to be added into pages?
                            </label>
                            <label for="website">
                                <input type="checkbox" name="desiredService" id="newPageExistingWebsite" value="newPageExistingWebsite" />
                                A new page on your existing website?
                            </label>
                            <label for="contentCreation">
                                <input type="checkbox" name="desiredService" id="fullRedesign" value="fullRedesign" />
                                A full website redesign?
                            </label>
                            <label for="contentCreation">
                                <input type="checkbox" name="desiredService" id="fullRedesign" value="fullFirstSite" />
                                Your first website?
                            </label>
                            <label for="chat">
                                <input type="checkbox" name="desiredService" id="chat" value="chat" />
                                Have something that doesn't fall within one of the other categories above?
                            </label>
                    </fieldset>
                    <textarea name="message" id="message" cols="75" rows="10" placeholder="Please provide a breif description of the project you're seeking help with."></textarea>
                    <fieldset id="compliance">
                        <label for="acceptContact">
                            <input type="checkbox" id="acceptContact" name="acceptContact" required/>
                            By checking this box you accept that someone can make contact via the preferred contact method provided in the form regarding the service requested.
                        </label>
                        <label for="acceptTOS">
                            <input type="checkbox" id="acceptTOS" name="acceptTOS" required/>
                            By checking this box you accept the terms and service listed in the <a href="/pages/termsAndConditions.html">terms and conditions</a> of this site.
                        </label>
                    </fieldset>    
                    <input type="submit" value="Submit!" class="contactSubmit" />
                </form>
    )
};