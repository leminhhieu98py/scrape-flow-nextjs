import { SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

function Homepage() {
  return (
    <>
      <div>Homepage Landing Page</div>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
    </>
  );
}

export default Homepage;
