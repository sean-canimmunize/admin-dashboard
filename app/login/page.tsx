import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { signIn } from '@/lib/auth';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            welcome
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <form
            action={async () => {
              'use server';
              await signIn('spotify', {
                redirectTo: '/home'
              });
            }}
            className="w-full"
          >
            <Button className="w-full">sign in with spotify</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
