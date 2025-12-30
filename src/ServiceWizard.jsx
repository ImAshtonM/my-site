import { useState } from "react"
export default function ServiceWizard({answers, onAnswer}) {
    const [step, setStep] = useState(1)
    return (
        <section id="ServiceWizard" className="w-full px-2 flex flex-col gap-4">
            {step === 1 && (
                <>
                    <h2 className="text-left md:text-3xl capitalize font-bold tracking-wider text-[var(--brand-color)]">Not sure where to start. Let's narrow this down,</h2>
                    <div className="flex flex-col gap-3 md:text-left">
                        <p>Not every project starts in the same place.</p>
                        <p>Answer a few quick questions and I’ll point you toward the solution that fits your goals, constraints, and timeline — without committing to anything yet.</p>
                        <button onClick={() => setStep(step + 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Start the quick guide →</button>
                        <p className="text-xs text-center">Takes about 60–90 seconds. You can skip or change answers anytime.</p>
                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <h2 className="text-left md:text-3xl capitalize font-bold tracking-wider text-[var(--brand-color)]">What are you primarily trying to accomplish right now?</h2>
                    <div className="flex flex-col gap-3 md:text-left">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2">
                                <input type="radio" id="fullWebsite" value="fullWebsite" name="intent" onChange={(e) => onAnswer("intent", e.target.value)}/>
                                <label htmlFor="fullWebsite">Full Website or Redesign</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" id="improvements" value="improvements" name="intent" onChange={(e) => onAnswer("intent", e.target.value)}/>
                                <label htmlFor="improvements">Help improving existing site or system</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" id="automation" value="automation" name="intent" onChange={(e) => onAnswer("intent", e.target.value)}/>
                                <label htmlFor="automation">Automate or Streamline a process</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" id="consult" value="consult" name="intent" onChange={(e) => onAnswer("intent", e.target.value)}/>
                                <label htmlFor="consult">I’m not sure yet — I just know something isn’t working</label>
                            </div>
                        </div>
                        <div className="flex gap-3 self-center">
                            <button onClick={() => setStep(step - 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Back</button>
                            <button onClick={() => setStep(step + 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Next</button>
                        </div>
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <h2 className="text-left md:text-3xl capitalize font-bold tracking-wider text-[var(--brand-color)]">What best describes your situation?</h2>
                    <div className="flex flex-col gap-3 md:text-left">
                          <div className="flex flex-col gap-4">
                            <div className="flex gap-2">
                                <input type="radio" id="newSite" value="newSite" name="context" onChange={(e) => onAnswer("context", e.target.value)}/>
                                <label htmlFor="newSite">I'm starting something new</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" id="improvements" value="improvements" name="context" onChange={(e) => onAnswer("context", e.target.value)}/>
                                <label htmlFor="existingSite">I already have something, but it’s limited or outdated</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" id="toolEfficiency" value="toolEfficiency" name="context" onChange={(e) => onAnswer("context", e.target.value)}/>
                                <label htmlFor="toolEfficiency">I have tools in place, but they don’t work well together</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" id="inquiring" value="inquiring" name="context" onChange={(e) => onAnswer("context", e.target.value)}/>
                                <label htmlFor="inquiring">I’m exploring options and gathering information</label>
                            </div>
                        </div>
                        <div className="flex gap-3 self-center">
                            <button onClick={() => setStep(step - 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Back</button>
                            <button onClick={() => setStep(step + 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Next</button>
                        </div>
                    </div>
                </>
            )}
            {step === 4 && (
                <>
                    <h2 className="text-left md:text-3xl capitalize font-bold tracking-wider text-[var(--brand-color)]">Which of these matters most for your project?</h2>
                    <div className="flex flex-col gap-3 md:text-left">
                          <div className="flex flex-col gap-4">
                            <div className="flex gap-2">
                                <input type="radio" id="betterUserExperience" value="betterUserExperience" name="focus" onChange={(e) => onAnswer("focus", e.target.value)}/>
                                <label htmlFor="betterUserExperience">Making the experience clearer and easier for users</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" id="guideUsers" value="guideUsers" name="focus" onChange={(e) => onAnswer("focus", e.target.value)}/>
                                <label htmlFor="guideUsers">Guiding different users to different outcomes</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" id="supportInternals" value="supportInternals" name="focus" onChange={(e) => onAnswer("focus", e.target.value)}/>
                                <label htmlFor="supportInternals">Supporting internal workflows or team processes</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" id="reduceManual" value="reduceManual" name="focus" onChange={(e) => onAnswer("focus", e.target.value)}/>
                                <label htmlFor="reduceManual">Reducing manual work through automation</label>
                            </div>
                        </div>
                        <div className="flex gap-3 self-center">
                            <button onClick={() => setStep(step - 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Back</button>
                            <button onClick={() => setStep(step + 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Next</button>
                        </div>
                    </div>
                </>
            )}
            {step === 5 && (
                <>
                    <h2 className="text-left md:text-3xl capitalize font-bold tracking-wider text-[var(--brand-color)]">Do you have any major constraints to consider?</h2>
                    <div className="flex flex-col gap-3 md:text-left">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2">
                                <input type="checkbox" id="timeline" value="timeline" name="constraints" onChange={(e) => onAnswer("constraints", e.target.value)}/>
                                <label htmlFor="timeline">Timeline is important</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id="leanBudget" value="leanBudget" name="constraints" onChange={(e) => onAnswer("constraints", e.target.value)}/>
                                <label htmlFor="leanBudget">Budget needs to stay lean</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id="scalable" value="scalable" name="constraints" onChange={(e) => onAnswer("constraints", e.target.value)}/>
                                <label htmlFor="scalable">The solution needs to scale later</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id="accessibilityCompliance" value="accessibilityCompliance" name="constraints" onChange={(e) => onAnswer("constraints", e.target.value)}/>
                                <label htmlFor="accessibilityCompliance">Accessibility or compliance</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" id="reduceManual" value="reduceManual" name="constraints" onChange={(e) => onAnswer("constraints", e.target.value)}/>
                                <label htmlFor="reduceManual">I’m not sure yet</label>
                            </div>
                        </div>
                        <div className="flex gap-3 self-center">
                            <button onClick={() => setStep(step - 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Back</button>
                            <button onClick={() => setStep(step + 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Next</button>
                        </div>
                    </div>
                </>
            )}
            {step === 6 && (
                <>
                    <h2 className="text-left md:text-3xl capitalize font-bold tracking-wider text-[var(--brand-color)]">What would you like to do next?</h2>
                    <div className="flex flex-col gap-3 md:text-left">
                        <div className="flex gap-3 self-center">
                            <button onClick={() => setStep(step - 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Back</button>
                            <button onClick={() => setStep(step + 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Next</button>
                        </div>
                    </div>
                </>
            )}
            {step === 7 && (
                <>
                    <h2 className="text-left md:text-3xl capitalize font-bold tracking-wider text-[var(--brand-color)]">Final</h2>
                    <div className="flex flex-col gap-3 md:text-left">

                        <div className="flex gap-3 self-center">
                            <button onClick={() => setStep(step - 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Back</button>
                            <button onClick={() => setStep(step + 1)} className="self-center rounded-md px-3 py-1 border border-white w-fit hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Next</button>
                        </div>
                    </div>
                </>
            )}
        </section>
    )    
}